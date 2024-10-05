import React from 'react'
import { useEffect, useState } from 'react';
import Invitcard from '../../assets/invitcard.jpeg'
import Location from '../../assets/geo-alt.svg'
import Ticket from '../../assets/ticket-perforated.svg'
import Navbar from '../Navbar/Navbar';

const EventList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const savedEvents = JSON.parse(localStorage.getItem('events')) || [];
        setEvents(savedEvents);
    }, []);

    const formatDateParts = (dateStr) => {
        const date = new Date(dateStr);

        const formattedDate = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric',
        }).format(date);

        const formattedWeekday = new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
        }).format(date);

        return { formattedDate, formattedWeekday };
    };

    const formatTime = (timeStr) => {
        const [hour, minute] = timeStr.split(':');
        let hours = parseInt(hour);
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert to 12-hour format
        return `${hours}:${minute} ${period}`;
    };

    return (
        <><Navbar />
            <div className='bg-white mx-40 mb-20'>
                <div className='container px-20 py-5 rounded-3xl bg-gradient-to-tl from-gray-200 to-sky-50 ...'>
                    <h1 className='text-4xl font-sans my-5 font-semibold mb-20'>Events</h1>
                    {events.map((event, index) => {
                        const { formattedDate, formattedWeekday } = formatDateParts(event.date);

                        return (
                            <div key={index} className='flex my-10'>
                                <div className='w-32'>
                                    <p className='font-medium text-lg'>{formattedDate}</p>
                                    <p className='text-gray-400 font-medium text-lg'>{formattedWeekday}</p>
                                </div>
                                <div className='flex mx-5 h-auto bg-white justify-between rounded-xl shadow-md'>
                                    <div className='px-8 py-2 w-[600px]'>
                                        <p className='font-sans text-lg font-medium text-gray-400'>{formatTime(event.time)}</p>
                                        <p className='font-sans font-bold text-2xl py-2'>{event.name}</p>
                                        <p className='font-sans text-lg text-gray-400 flex'><img src={Location} className='mr-2 opacity-50' />{event.location ? event.location : 'Virtual'}</p>
                                        <p className='font-sans text-lg text-gray-400 flex'><img src={Ticket} className='mr-2 opacity-50' />{event.ticket ? event.ticket : 'Free'}</p>
                                        <button className='bg-blue-500 text-lg text-white px-2 mt-4 mb-2 rounded-md hover:font-semibold'>View</button>
                                    </div>
                                    <div className='p-5 w-60'>
                                        <img src={Invitcard} className='w-40 rounded-md' />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default EventList
