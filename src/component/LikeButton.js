import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useAuthContext} from "../auth";
import { supabase } from "./supabaseData";
export default function LikeButton({stallId}) {
  const {userData} = useAuthContext();
  const [inFavorite, setInFavorite] = useState(false);


  const handleClickFavorite = async () => {
    try {
      await supabase
        .from('favorites')
        .insert([
          {
            stall_id: stallId,
            user_id: userData.id
          }
        ]);
      setInFavorite(true)
    } catch (err) {
      console.log(err);
    }
  }

  const handleClickUnFavorite = async () => {
    try {
      await supabase
        .from('favorites')
        .delete()
        .eq('stall_id', stallId)
        .eq('user_id', userData.id);
      setInFavorite(false)
    } catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    if (userData) {
      supabase.from('favorites')
        .select()
        .eq('user_id', userData.id)
        .eq('stall_id', stallId)
        .then(({data, error}) => {
          if (error) {

          } else {
            if (data.length > 0) {
              setInFavorite(true);
            }
          }
        })
    }
  }, [userData]);



  return (
    <Box>
      {!inFavorite && (
        <IconButton
          onClick={() => {
            handleClickFavorite()
          }}
          color={'error'}>
          <FavoriteBorderIcon />
        </IconButton>
      )}
      {inFavorite && (
        <IconButton
          onClick={() => {
            handleClickUnFavorite()
          }}
          color={'error'}>
          <FavoriteIcon />
        </IconButton>
      )}
    </Box>
  )
}