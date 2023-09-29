import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
//import { useGetSongsByCountryQuery } from '../redux/services/shazam';

const CountryTracks = () =>  {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    //const { data, isFetching, error } = useGetSongsByCountryQuery(country);
    // useEffect(() => {
    //     axios
    //       .get(`https://geo.ipify.org/api/v2/country?apiKey=${import.meta.env.VITE_GEO_API_KEY}`)
    //       .then((res) => setCountry(res?.data?.location.country))
    //       .catch((err) => console.log(err))
    //       .finally(() => setLoading(false));

        
    //   }, [country]);
    function success(position) {
        var latitude  = position.coords.latitude;
        var longitude = position.coords.longitude;
        //reverseGeocodingWithGoogle(latitude, longitude)
        console.log(reverseGeocodingWithGoogle(latitude, longitude));
      }
      function error() {
        console.log("Unable to retrieve your location");
      }

    
     
      navigator.geolocation.getCurrentPosition(success,error);

    return (
       <div>

       </div>
    )
}

export default CountryTracks;
