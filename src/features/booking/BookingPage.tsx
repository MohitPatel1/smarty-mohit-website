import { Box, Button, Container, Link, Paper, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import { BOOKING_EMBED_URL, BOOKING_PAGE_URL } from './constants';

const BookingPage = () => (
  <Container component="main" maxWidth="md" sx={{ py: { xs: 3, md: 6 } }}>
    <Helmet>
      <title>Book a 1-on-1 | Mohit Patel</title>
    </Helmet>

    <Button component={RouterLink} to="/" color="inherit" sx={{ px: 1, mb: 2 }}>
      ← Home
    </Button>
    <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
      Book a 1-on-1 with me 🌻
    </Typography>
    <Typography color="text.secondary" sx={{ mt: 1, mb: 3 }}>
      30 minutes, online. Pick a time that suits you.
    </Typography>

    <Paper elevation={3} sx={{ overflow: 'hidden' }}>
      <Box
        component="iframe"
        src={BOOKING_EMBED_URL}
        title="Book a 1-on-1 with Mohit"
        sx={{ display: 'block', width: '100%', height: { xs: 1250, md: 800 }, border: 0 }}
      />
    </Paper>

    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
      Calendar not loading?{' '}
      <Link href={BOOKING_PAGE_URL} target="_blank" rel="noopener noreferrer" color="text.primary">
        Open the booking page
      </Link>
    </Typography>
  </Container>
);

export default BookingPage;
