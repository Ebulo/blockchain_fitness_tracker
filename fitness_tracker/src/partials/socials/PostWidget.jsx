import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import FlexBetween from "../../components/FlexBetween";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useState } from "react";

import { shortenAddress } from "../../utils/shortenAddress";

// import useFetch from "../../hooks/useFetch";

const PostWidget = ({
  id,
  addressFrom = "address",
  message,
  likes = 0,
  comments = 0,
  gasFees,
  points,
  // keyword,
}) => {
  const [isComments, setIsComments] = useState(false);
  const [liked, setLiked] = useState(false);
  const [_likes, setLikes] = useState(likes);
  // const gifUrl = useFetch({ keyword });
  // console.log(gifUrl);
  return (
    <WidgetWrapper>
      <div
        style={{
          background: "#fff",
          padding: "10px 10px",
          borderRadius: "10px",
          margin: 0,
          boxShadow: "10px 10px #4444",
        }}
      >
        <Typography sx={{ mt: "0.6rem" }} fontWeight="bold">
          {shortenAddress(addressFrom)}
        </Typography>
        <Typography sx={{ mt: "1.2rem" }}>{message}</Typography>
        <FlexBetween mt="0.25rem">
          <FlexBetween gap="1rem">
            <FlexBetween gap="0.3rem">
              <IconButton
                onClick={() => {
                  console.log("Liked");
                  setLiked(!liked);
                  if (_likes == likes + 1) setLikes(likes);
                  else setLikes(likes + 1);
                }}
              >
                {liked ? (
                  <FavoriteOutlined sx={{}} />
                ) : (
                  <FavoriteBorderOutlined />
                )}
              </IconButton>
              <Typography>{_likes}</Typography>
            </FlexBetween>

            <FlexBetween>
              <IconButton onClick={() => setIsComments(!isComments)}>
                <ChatBubbleOutlineOutlined />
              </IconButton>
              <Typography>{comments}</Typography>
            </FlexBetween>
          </FlexBetween>

          <IconButton>
            <ShareOutlined />
          </IconButton>
        </FlexBetween>
      </div>
    </WidgetWrapper>
  );
};

export default PostWidget;
