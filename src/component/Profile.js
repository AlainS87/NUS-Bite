import ResponsiveAppBar from "../Appbar";
import {useAuthContext} from "../auth";
import {Box, Avatar, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import { supabase } from "./supabaseData";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {ToastTypes, useToast} from "./Toast";
import StallList from "./StallList";
import {useParams} from "react-router-dom";
function convertImageToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
}
export default function Profile() {
  const {userData} = useAuthContext();

  const [profile, setProfile] = useState(null);
  const [favoriteStalls, setFavoriteStalls] = useState([]);
  const {show} = useToast();
  const {userId} = useParams();
  const handleUpdate = async () => {
    try {
      await supabase
        .from('users')
        .update(profile)
        .eq('google_id', userData.id)
        .select();
      show(ToastTypes.SUCCESS, 'Update success!');

    } catch (err) {

    }
  }

  useEffect(() => {
    if (!profile) {
      let google_id = '';
      if (userId) {
        google_id = userId;
      } else {
        google_id = userData.id;
      }

      supabase
        .from('users')
        .select()
        .eq('google_id', google_id)
        .then((data, error) => {
          if (error) {

          } else {
            if (data && data.data && data.data[0]) {
              setProfile({...data.data[0]});
            }
          }
        })

      supabase
        .from('favorites')
        .select(`
          id,
        
          stalls(id, name,location,price,taste,comment,environment,customers)
        `)
        .eq('user_id', google_id)
        .then(({data, error}) => {
          setFavoriteStalls(data.map(item => item.stalls))
        })
    }


  }, [userData, userId]);



  if (!userData) {
    return <></>;
  }

  return (
    <div className={'App'} style={{paddingBottom:'40px'}}>
      <ResponsiveAppBar />

      <Box
        marginTop={'30px'}
        display={'flex'} flexDirection={'column'} alignItems={'center'}>
        <label>
          <Avatar
            style={{
              width: '80px',
              height: '80px'
            }}
            src={profile?.avatar} />
          <input
            onChange={async e => {
              try {
                const file = e.target.files[0];
                const src = await convertImageToBase64(file);
                setProfile({
                  ...profile,
                  avatar: src
                })
              } catch (err) {
                console.log(err)
              }
            }}
            hidden type={'file'} accept={'image/*'}/>
        </label>
        <Typography color={'white'} marginTop={'30px'} variant={'h3'}>
          {profile?.username}
        </Typography>
        <Box width={'40%'} marginTop={'20px'}>
          <TextField
            onChange={e => {
              setProfile({
                ...profile,
                username: e.target.value
              })
            }}
            value={profile?.username || ''}
            label={'Username'} fullWidth/>
        </Box>
        <Box width={'40%'} marginTop={'20px'}>
          <TextField
            onChange={e => {
              setProfile({
                ...profile,
                email: e.target.value
              })
            }}
            value={profile?.email || userData?.email || ''}
            label={'Email'} fullWidth/>
        </Box>
        <Box width={'40%'} marginTop={'20px'}>
          <TextField
            onChange={e => {
              setProfile({
                ...profile,
                phone: e.target.value
              })
            }}
            value={profile?.phone || ''}
            label={'Phone Number'} fullWidth/>
        </Box>
        <Box width={'40%'}  marginTop={'20px'}>
          <TextField
            onChange={e => {
              setProfile({
                ...profile,
                introduction: e.target.value
              })
            }}
            value={profile?.introduction || ''}
            label={'Introduction'} multiline rows={3} fullWidth/>
        </Box>
        {!userId && (
          <Box marginTop={'30px'}>
            <Button
              onClick={handleUpdate}
              variant={'contained'}>Update</Button>
          </Box>
        )}

        <Box>
          <Typography variant={'h5'}>
            Favorites
          </Typography>
          <StallList stalls={favoriteStalls}/>
        </Box>
      </Box>
    </div>
  )
}