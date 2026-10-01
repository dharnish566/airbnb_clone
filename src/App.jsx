import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ListingStickyNavbar from './components/ListingsStickyNavbar';
import ListingHeader from './components/ListingHeader';
import HeroPhotoGallery from './components/HeroPhotoGallery';
import PhotoGallery from './components/PhotoGallery';
import PropertyOverview from './components/PropertyOverview';
import Description from './components/Description';
import SleepingArrangement from './components/SleepingArrangement';
import Amenities from './components/Amenities';
import Calendar from './components/Calendar';
import BookingCard from './components/BookingCard';
import Reviews from './components/Reviews';
import Location from './components/Location';
import MeetYourHost from './components/MeetyourHost';
import ThingsToKnow from './components/ThingsToKnow';
import MoreStaysNearby from './components/MoreStaysNearby';

function App() {
  const [isSaved, setIsSaved] = useState(false);
  const [toastState, setToastState] = useState({ visible: false, message: '', timerId: null });
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  const toggleSave = () => {
    const nextSaved = !isSaved;
    setIsSaved(nextSaved);

    if (toastState.timerId) {
      clearTimeout(toastState.timerId);
    }

    const newTimerId = setTimeout(() => {
      setToastState((prev) => ({ ...prev, visible: false }));
    }, 3000);

    setToastState({
      visible: true,
      message: nextSaved ? 'Saved to wishlist' : 'Removed from wishlist',
      timerId: newTimerId,
    });
  };

  const handleOpenPhotoTour = (photoTarget = null) => {
    setSelectedPhotoIndex(photoTarget);
    setIsPhotoTourOpen(true);
  };

  const handleClosePhotoTour = () => {
    setIsPhotoTourOpen(false);
    setSelectedPhotoIndex(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans antialiased">
      <Navbar />
      <ListingStickyNavbar />

      <main className="flex-1" id="main">
        <div className="listing-container max-w-[1280px] mx-auto px-6 md:px-10 lg:px-20">
          {/* Header Title & Share/Save */}
          <ListingHeader isSaved={isSaved} onToggleSave={toggleSave} />

          {/* Hero Photos Grid */}
          <HeroPhotoGallery onOpenPhotoTour={handleOpenPhotoTour} />

          {/* Main Layout Grid */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative mt-8">
            {/* Left Column (Details) */}
            <div className="flex-1 w-full lg:w-2/3">
              <PropertyOverview />
              <Description />
              <SleepingArrangement />
              <Amenities />
              <Calendar />
            </div>

            {/* Right Column (Booking Card) */}
            <BookingCard />
          </div>

          {/* Page Sections */}
          <Reviews />
          <Location />
          <MeetYourHost />
          <ThingsToKnow />
          <MoreStaysNearby />
        </div>
      </main>

      {/* Fullscreen Photo Tour Modal */}
      {isPhotoTourOpen && (
        <PhotoGallery
          onClose={handleClosePhotoTour}
          initialPhoto={typeof selectedPhotoIndex === "string" ? selectedPhotoIndex : null}
          initialIndex={typeof selectedPhotoIndex === "number" ? selectedPhotoIndex : null}
        />
      )}

      {/* Wishlist Toast Notification */}
      <div
        className={`_HALoyX ${toastState.visible ? 'show' : ''}`}
        id="_HALoyX"
        role="status"
        aria-live="polite"
      >
        {toastState.message}
      </div>
    </div>
  );
}

export default App;
