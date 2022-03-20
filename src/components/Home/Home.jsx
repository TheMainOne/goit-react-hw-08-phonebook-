import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { HomeTitle } from "./Home.styled"
import { CardList } from './Home.styled';


export const Home = () => {
    return (<>
        <HomeTitle>Welcome to our phonebook app!</HomeTitle>
        <CardList>
         <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.pixabay.com/photo/2014/08/05/10/30/iphone-410324_1280.jpg"
          alt="phone"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            State standarts for phone network
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste quas quia laudantium nobis assumenda inventore numquam dolores similique, quis possimus dolore commodi nisi fuga suscipit illo facilis pariatur. Voluptate, fugit.
          </Typography>
        </CardContent>
      </CardActionArea>
        </Card>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083379_1280.jpg"
          alt="girl"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            A new era of phone calls 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus tempora error praesentium eligendi suscipit accusantium, nam dicta quaerat laborum eveniet, iste nulla alias nemo laboriosam.
        </Typography>
        </CardContent >
      </CardActionArea>
            </Card>
              <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_1280.jpg"
          alt="social media"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Social media for everyone
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, reiciendis nemo ut magnam rem dicta! Culpa possimus inventore architecto distinctio voluptates odio voluptatum unde ab perspiciatis, consequuntur necessitatibus est impedit?
          </Typography>
        </CardContent>
      </CardActionArea>
        </Card>
        </CardList>
    </>)
}

