import React, { useState } from 'react';
import { data } from '../data';
import { FiSearch } from "react-icons/fi";

export default function Tables(props) {
    console.log(data);

    const [search, setSearch] = useState('');


    const searchBox = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }

    const searchArea = {
        display: 'flex',
        flexDirection: 'row'
    }

    const searchIcon = {
        width: '44px',
        backgroundColor: '#dce4ff',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        paddingTop: '19px',
        height: '60px',
        borderTopLeftRadius: '10px',
        borderBottomLeftRadius: '10px',
    }

    const input = {
        border: 'none',
        backgroundColor: '#dce4ff',
        borderTopRightRadius: '0.5rem',
        borderBottomRightRadius: '0.5rem',
        color: '#464646',
        outline: 'none',
        height: '30px',
        outline: 'none',
        height: '60px',
        borderRadius: '10px',
        // paddingLeft: '23px',
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
    }

    const table_wrapper = {
        maxWidth: '85rem',
        overflowY: 'scroll',
        maxHeight: '30rem',
    }
    const tableStyling = {
        minWidth: 'max-content'

    }
    const table_heading = {
        position: 'sticky',
        top: '0px'
    }
    const firstTh = {
        padding: '20px 45px 20px 10px',
        backgroundColor: '#80284a',
        color: 'white'
    }
    const th = {
        padding: '20px 45px 20px 0px',
        backgroundColor: '#80284a',
        color: 'white'
    }
    const lastTh = {
        padding: '20px 10px 20px 0px',
        backgroundColor: '#80284a',
        color: 'white'
    }
    const td = {
        paddingTop: '15px'
    }

    return (
        <>
            <div className="Container" >

                <div style={searchBox} className="searchBox">
                    <h1 style={{ paddingBottom: '30px' }}>Table</h1>
                    <div style={searchArea} className="searchArea">

                        <div style={searchIcon} className="searchIcon">
                            <FiSearch />
                        </div>

                        <input style={input} type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search Your Query" />
                    </div>
                </div>

                
                <div className="outer_wrapper">
                    <div className="table_wrapper" style={table_wrapper}>
                        <table style={tableStyling}>
                            <thead className='table_heading' style={table_heading}>
                                <tr>
                                    <th style={firstTh}>Name</th>
                                    <th style={th}>Warmth</th>
                                    <th style={th}>Reasoning</th>
                                    <th style={th}>Emotional Stability</th>
                                    <th style={th}>Dominance</th>
                                    <th style={th}>Liveliness</th>
                                    <th style={th}>Rule Conciousness</th>
                                    <th style={th}>Social Boldness</th>
                                    <th style={th}>Sensitivity</th>
                                    <th style={th}>Vigilance</th>
                                    <th style={th}>Abstractedness</th>
                                    <th style={th}>Privateness</th>
                                    <th style={th}>Apprehension</th>
                                    <th style={th}>Openness to change</th>
                                    <th style={th}>Self Reliance</th>
                                    <th style={th}>Perfectionism</th>
                                    <th style={lastTh}>Tension</th>

                                </tr>
                            </thead>
                            <tbody>


                                {data.filter((item) => {
                                    return search.toLowerCase() === ' ' ? item : item.Name.toLowerCase().includes(search);
                                }).map((item) => (
                                    <tr key={item.id}>
                                        <td style={{ paddingLeft: '10px' }}>{item.Name}</td>
                                        <td style={td}>{item.Warmth}</td>
                                        <td style={td}>{item.Reasoning}</td>
                                        <td style={td}>{item.Emotional_Stability}</td>
                                        <td style={td}>{item.Dominance}</td>
                                        <td style={td}>{item.Liveliness}</td>
                                        <td style={td}>{item.Rule_Conciousness}</td>
                                        <td style={td}>{item.Social_Boldness}</td>
                                        <td style={td}>{item.Sensitivity}</td>
                                        <td style={td}>{item.Vigilance}</td>
                                        <td style={td}>{item.Abstractedness}</td>
                                        <td style={td}>{item.Privateness}</td>
                                        <td style={td}>{item.Apprehension}</td>
                                        <td style={td}>{item.Openness_to_change}</td>
                                        <td style={td}>{item.Self_Reliance}</td>
                                        <td style={td}>{item.Perfectionism}</td>
                                        <td style={td}>{item.Tension}</td>
                                    </tr>
                                ))}




                            </tbody>
                        </table>
                    </div>
                </div>
            </div>



        </>
    )
}
