// Write your Character component here

import React, { useState, useEffect } from "react";
import styled from "styled-components";



export default function Character({info}) {

    return (
        <div>
            <h2>{info.name}</h2>
            <h3>Gender: {info.gender}</h3>
            <h3>Height: {info.height}</h3>
            <h3>Mass: {info.mass}</h3>
            <h3>Birth Year: {info.birth_year}</h3>
            <h3>Eye Color: {info.eye_color}</h3>
            <h3>Hair Color: {info.hair_color}</h3>
            <h3>Skin Color: {info.skin_color}</h3>
        </div>
    )
}