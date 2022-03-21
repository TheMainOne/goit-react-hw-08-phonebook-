import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/TheMainOne/goit-react-hw-08-phonebook-">
        
      </Link>{''}
      {new Date().getFullYear()}
      {' | All rights reserved'}
    </Typography>
  );
}

function Footer(props) {
  const { title } = props;

  return (
    <Box component="footer" sx={{ py: 6, position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}

Footer.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Footer;
