import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Eventformcss.css"
import Logo from '../../assets/react.svg'
import Global from '../../assets/globe2.svg'
import Layers from '../../assets/layers.svg'
import Calendar from '../../assets/calendar2-date.svg'
import Location from '../../assets/geo-alt.svg'
import Ticket from '../../assets/ticket-perforated.svg'
import Edit from '../../assets/pencil.svg'
import Approval from '../../assets/icons8-checkmark.svg'
import Denied from '../../assets/icons8-cancel.svg'
import Upload from '../../assets/upload.svg'
import RequireApproval from '../../assets/checkmark-male-user-icon.svg'
import ThemeImage from '../../assets/upload-image-icon.svg'
import WhiteTheme from '../../assets/whitetheme.png'
import HolidayTheme from '../../assets/holidaytheme.png'
import AbstractTheme from '../../assets/abstracttheme.png'
import QuantumTheme from '../../assets/quantumtheme.png'
import SortArrow from '../../assets/sort-arrows-icon.svg'
import Navbar from '../Navbar/Navbar';

const Eventform = () => {
    const [event, setEvent] = useState({ name: '', date: '', time: '', location: '', ticket: '', approval: 'No', capacity: '', visibility: 'Public' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const events = JSON.parse(localStorage.getItem('events')) || [];
        events.push(event);
        localStorage.setItem('events', JSON.stringify(events));
        navigate('/events');
    };

    const [approvalactive, setApprovalactive] = useState(false);
    const [deniedactive, setDeniedactive] = useState(false);

    const changeapproval = () => {
        setApprovalactive(!approvalactive);
        if (deniedactive == true) {
            setDeniedactive(!deniedactive);
        }
        setEvent({ ...event, approval: approvalactive ? '' : 'Yes' });
    }

    const changedenied = () => {
        setDeniedactive(!deniedactive);
        if (approvalactive == true) {
            setApprovalactive(!approvalactive);
        }
        setEvent({ ...event, approval: deniedactive ? '' : 'No' });
    }

    const [bgClass, setBgClass] = useState('bg-white');

    const changeBackgroundClass = (newBgClass) => {
        setBgClass(newBgClass);
    };

    return (
        <div>
            <Navbar />
            <div className='bg-white mx-36'>
                <div className='lrcontain bg-gray-200 py-10 rounded-2xl'>
                    <div className='left-right-container bg-white mx-10 py-5 rounded-2xl'>
                        <div className='left'>
                            <div className='pheading'>
                                <div className='pleft'>
                                    <img src={Logo} />
                                </div>
                                <div className='pcenter'>
                                    <p className='create'>Create under</p>
                                    <p className='pcal'>Personal Calendar</p>
                                </div>
                            </div>
                            <div className='input-field'>
                                <input type='text' value={event.name} placeholder='Event Name' onChange={(e) => setEvent({ ...event, name: e.target.value })} />
                            </div>
                            <div className='dtcontainer'>
                                <div className='calender-img'>
                                    <img src={Calendar} />
                                </div>
                                <div className='date-time'>
                                    <div className='date'>
                                        <div className='start'>
                                            <p style={{ padding: "5px 50px 5px 10px", marginTop: "3px" }}>Start</p>
                                            <p style={{ marginTop: "2px", marginRight: "5px", backgroundColor: "rgba(207, 207, 207, 0.662)", borderRadius: "4px" }}>
                                                <input type='date' className='date-input' value={event.date} onChange={(e) => setEvent({ ...event, date: e.target.value })} />
                                            </p>
                                            <p style={{ marginTop: "2px", marginRight: "3px", backgroundColor: "rgba(207, 207, 207, 0.662)", borderRadius: "4px" }}>
                                                <input type='time' className='time-input' value={event.time} onChange={(e) => setEvent({ ...event, time: e.target.value })} />
                                            </p>
                                        </div>
                                        <div className='end'>
                                            <p style={{ padding: "5px 58.5px 5px 10px", marginTop: "3px", marginBottom: "3px" }}>End</p>
                                            <p style={{ marginBottom: "3px", marginRight: "5px", backgroundColor: "rgba(207, 207, 207, 0.662)", borderRadius: "4px" }}>
                                                <input type='date' className='date-input' />
                                            </p>
                                            <p style={{ marginRight: "3px", marginBottom: "3px", backgroundColor: "rgba(207, 207, 207, 0.662)", borderRadius: "4px" }}>
                                                <input type='time' className='time-input' />
                                            </p>
                                        </div>
                                    </div>
                                    <div className='extradetail'>
                                        <p style={{ marginBottom: "5px" }}><img src={Global} />GMT +5:30 Calcutta</p>
                                        <hr />
                                        <p style={{ marginTop: "5px", marginBottom: "5px" }}><img src={Layers} />Create Multi-Session Event</p>
                                    </div>
                                </div>
                            </div>
                            <div className='location'>
                                <div className='location-img'>
                                    <img src={Location} />
                                </div>
                                <div className='location-desc'>
                                    <p className='laddevent'>Add Event Location</p>
                                    <input type='text' className='loffine' placeholder='Offline location or virtual link' value={event.location} onChange={(e) => setEvent({ ...event, location: e.target.value })} />
                                </div>
                            </div>
                            <div className='event-options'>
                                <p className='eventoptionsname'>Event Options</p>
                                <div className='event-features'>
                                    <div className='event-tickets'>
                                        <div className='ticket-left'>
                                            <img src={Ticket} />
                                            <p>Tickets</p>
                                        </div>
                                        <div className='ticket-right'>
                                            <input style={{ width: "70px" }} type='text' className='capacity-input' placeholder='Free' value={event.ticket} onChange={(e) => setEvent({ ...event, ticket: e.target.value })} />
                                            <img src={Edit} />
                                        </div>
                                    </div>
                                    <hr className='event-option-hr' />
                                    <div className='event-tickets'>
                                        <div className='ticket-left'>
                                            <img src={RequireApproval} style={{ width: "20px" }} />
                                            <p style={{ width: "150px" }}>Require Approval</p>
                                        </div>
                                        <div className='ticket-right'>
                                            <img src={Approval} className='approval' onClick={changeapproval} style={{ backgroundColor: approvalactive ? "red" : "black" }} />
                                            <img src={Denied} className='denied' onClick={changedenied} style={{ backgroundColor: deniedactive ? "red" : "black" }} />
                                        </div>
                                    </div>
                                    <hr className='event-option-hr' />
                                    <div className='event-tickets'>
                                        <div className='ticket-left'>
                                            <img src={Upload} />
                                            <p>Capacity</p>
                                        </div>
                                        <div className='ticket-right'>
                                            <input type='text' className='capacity-input' placeholder='Unlimited' value={event.capacity} onChange={(e) => setEvent({ ...event, capacity: e.target.value })} />
                                            <img src={Edit} />
                                        </div>
                                    </div>
                                    <hr className='event-option-hr' />
                                    <div className='event-tickets'>
                                        <div className='ticket-left'>
                                            <img src={Global} />
                                            <p>Visibility</p>
                                        </div>
                                        <div className='ticket-right'>
                                            <select className='form-select' value={event.visibility} onChange={(e) => setEvent({ ...event, visibility: e.target.value })}>
                                                <option value="Public">Public</option>
                                                <option value="Private">Private</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='event-btn'>
                                <button className='create-event-btn' onClick={handleSubmit}>Create Event</button>
                            </div>
                        </div>
                        <div className='right'>
                            <div className={`theme-display ${bgClass}`}>
                                <div className='theme-display-text'>
                                    <p>Hello, My name is <span style={{ color: "red" }}>Jatin Kumar</span> and I'm an software Engineer, but I love to do many activities like biking, reading and travelling around the world.</p>
                                </div>
                                <div className='theme-display-image'>
                                    <img src={ThemeImage} />
                                </div>
                            </div>
                            <div className='theme-section'>
                                <p className='themesectionname'>Theme</p>
                                <div className='theme-selection'>
                                    <div className='indtheme' onClick={() => changeBackgroundClass('bg-white')}>
                                        <img src={WhiteTheme} />
                                        <p>Minimal</p>
                                    </div>
                                    <div className='indtheme' onClick={() => changeBackgroundClass('bg-gradient-to-tl from-amber-700 to-amber-600 ...')}>
                                        <img src={HolidayTheme} />
                                        <p>Holiday</p>
                                    </div>
                                    <div className='indtheme' onClick={() => changeBackgroundClass('bg-gradient-to-tl from-gray-400 to-gray-200 ...')}>
                                        <img src={AbstractTheme} />
                                        <p>Abstract</p>
                                    </div>
                                    <div className='indtheme' onClick={() => changeBackgroundClass('bg-gradient-to-tr from-purple-200 to-sky-100 ...')}>
                                        <img src={QuantumTheme} />
                                        <p>Quantum</p>
                                    </div>
                                </div>
                            </div>
                            <div className='color-font-section'>
                                <div className='color-section'>
                                    <div className='color-section-left'>
                                        <div className='color-indicater'></div>
                                        <p>Color</p>
                                    </div>
                                    <div className='color-section-right'>
                                        <p>Gray</p>
                                        <img src={SortArrow} />
                                    </div>
                                </div>
                                <hr style={{ opacity: "0.2" }} />
                                <div className='color-section'>
                                    <div className='color-section-left'>
                                        <p style={{ color: "black", marginRight: "10px", fontSize: "18px", fontWeight: "600" }}>Ag</p>
                                        <p>Typeface</p>
                                    </div>
                                    <div className='color-section-right'>
                                        <p>Default</p>
                                        <img src={SortArrow} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eventform

