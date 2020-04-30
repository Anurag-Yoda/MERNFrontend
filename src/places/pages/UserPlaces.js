import React from "react";
import {useParams} from 'react-router-dom';
import PlaceList from "../components/PlaceList";

const DEMO_PLACE = [
    {
        id: 'a1',
        title: 'Taj Mahal',
        description: '7 wonders of the World',
        imageUrl: 'https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg',
        address: 'Agra, India',
        location: {
            lat:27.1751448,
            lng:78.0399535
        },
        creator:'a1'
    },
    {
        id: 'b1',
        title: 'Taj Mahal 2',
        description: '7 wonders of the World',
        imageUrl: 'https://cdn.britannica.com/86/170586-050-AB7FEFAE/Taj-Mahal-Agra-India.jpg',
        address: 'Agra, India',
        location: {
            lat:27.1751448,
            lng:78.0399535
        },
        creator:'b1'
    }
]


const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DEMO_PLACE.filter(place => place.creator === userId);
  return <PlaceList items = {loadedPlaces}/>
};

export default UserPlaces;
