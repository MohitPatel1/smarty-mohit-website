import { Box } from '@mui/material';
import { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import IntroTransition from './components/IntroTransition';
import { BOOKING_ROUTE } from './features/booking';

const BookingPage = lazy(() => import('./features/booking/BookingPage'));

function HomePage() {
  return (
    <Box>
      <Helmet>
        <title>Mohit Patel | Digital Presence</title>
      </Helmet>
      <IntroTransition />
    </Box>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path={BOOKING_ROUTE}
        element={
          <Suspense fallback={null}>
            <BookingPage />
          </Suspense>
        }
      />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default App;
