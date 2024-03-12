'use client'

// React Elements
import React from 'react';
import { useState, useEffect } from 'react';
// Bootstrap Elements
import 'bootstrap/dist/css/bootstrap.min.css';
import Stack from 'react-bootstrap/Stack';
import Card from 'react-bootstrap/Card';
// CSS
import styles from "../styles/grid.module.css";

function GridDisplay() {

    // Data
    const [testData, setTestData] = useState({});
    // Data displayed in Cards
    const [cardCollection, setCardCollection] = useState(null);
    const [cardWidth, setCardWidth] = useState(`fit-content`);
    const [cardWidthValue, setCardWidthValue] = useState(0);
    // White space variables
    const [windowWidth, setWindowWidth] = useState(0);
    const [gapWidth, setGapWidth] = useState(0);

    // Collect data to display
    useEffect(() => {
        const fetchData = async () => {
            setTestData({
                a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, 
                k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
                u: 21, v: 22, w: 23, x: 24, y: 25, z: 100
            });
        }
        fetchData();
    }, []);

    // Once data is collected, generate cards
    useEffect(() => {
        populateCards();
    }, [testData, cardWidth]);

    // Once cards are generated, adjust width
    useEffect(() => {
        if (cardWidth == "fit-content") {
            updateCardWidths();
        }
    }, [cardCollection]);

    // Register window size
    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', () => { 
            setWindowWidth(window.innerWidth);
        });
    });

    // Adjust spacing between cards when window size changes
    useEffect(() => {
        findGapWidth();
    }, [cardCollection, windowWidth]);

    /**
     * Create a Card to display a String
     * @param {String} key : unique key for Card
     * @param {String} content : data to be displayed
     * @returns Card component
     */
    const createCard = (key, content) => {
        return  <Card className={styles.card} key={key}>
                    <Card.Body id={`${key}_content`} style={{ padding: 10, width: cardWidth}} >{content}</Card.Body>
                </Card>
    };

    /**
     * Takes data (Object format) and generates a collection of Card components to dispay each key:value pair
     */
    const populateCards = () => {
        let labels = Object.keys(testData);
        let cards = labels.map((label, _) => {
            let id = `${label}`;
            let displayedData = `${label}: ${testData[label]}`;
            return createCard(id, displayedData);
        });
        setCardCollection(cards);
    }

    /**
     * After generating Cards, measure the width of each Card to determine max width.
     * Set card width states so that all cards will be reformatted to be the same width.
     */
    const updateCardWidths = () => {
        let [...innerCardContainers] = document.getElementsByClassName("card-body");
        if (innerCardContainers.length > 0) {
            let maxWidth = 0;
            for (let i = 0; i < innerCardContainers.length; i++) {
                let width = (innerCardContainers[i]).getBoundingClientRect().width;
                if (width > maxWidth) {
                    maxWidth = width;
                };
            }
            let pixels = `${maxWidth}px`
            setCardWidth(pixels);
            setCardWidthValue(maxWidth);
        }
    }

    /**
     * Consider available white space after Cards are added to the window.
     * Adjust gap size such that all available space will be utilised.
     */
    const findGapWidth = () => {
        // Find width of used window space
        let adjustedWindowWidth = document.getElementById("counterContainer").getBoundingClientRect().width;
        // Calculate space available for white space
        let numCardsHorizontalFit = Math.floor(adjustedWindowWidth / cardWidthValue);
        let spaceRemaining = adjustedWindowWidth - (numCardsHorizontalFit * cardWidthValue);
        // One less space than elements
        let gapSize = spaceRemaining / (numCardsHorizontalFit - 1) - 0.2;
        setGapWidth(gapSize);
    }

    return (
        <div className={styles.grid}>
            <Stack className={styles.stack} direction="horizontal" style={{ columnGap: `${gapWidth}px`, display: "grid", gridTemplateColumns: `repeat(auto-fill, ${cardWidth})` }}>
                {cardCollection}
            </Stack>
        </div>
    );
}

export default GridDisplay;