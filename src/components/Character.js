// Write your Character component here

import styled from "styled-components";
import {useState} from 'react' 
import '../App.css'
import {Title, Details, Button, Card, Line } from './styles'

export default function Character({info}) {

    const [isOpen, setIsOpen] = useState(false);

    console.log(isOpen)
    return (
        <div>
            <Card className="card">
                <div className="title" className="left">
                    <Button onClick={() => setIsOpen(!isOpen)}>
                        <Title>{info.name}</Title>
                    </Button>
                </div>

                <div className="details" className="right">
                    {isOpen && 
                        <Details isOpen={isOpen}>
                            <div>
                                <p>Gender: {info.gender}</p>
                                <p>Birth Year: {info.birth_year}</p>
                            </div>
                            <Line></Line>
                            <div>
                                <p>Eye Color: {info.eye_color}</p>
                                <p>Hair Color: {info.hair_color}</p>
                                <p>Skin Color: {info.skin_color}</p>
                            </div>
                            <Line></Line>
                            <div>
                                <p>Height: {info.height}</p>
                                <p>Mass: {info.mass}</p>
                            </div>
                        </Details> 
                    }
                </div>
            </Card>
        </div>
    )
}

