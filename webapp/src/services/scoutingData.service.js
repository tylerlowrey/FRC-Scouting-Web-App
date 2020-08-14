import {BACKEND_API_URL} from "../constants";
import axios from 'axios';

export const scoutingDataService = {
    getAllScoutingData,
    getScoutingDataForTeam,
}


function getAllScoutingData() {
    return {
        "headers": [
            {"title": "Team Number", "headerId": "teamNumber"},
            {"title": "Match Number", "headerId": "matchNumber"},
            {"title": "Alliance", "headerId": "alliance"},
            {"title": "Total Points Scored", "headerId": "totalPoints"},
            {"title": "Points Scored in Auto", "headerId": "autoPoints"},
            {"title": "Crossed Baseline in Auto", "headerId": "baselineAuto"},
            {"title": "Points Scored in Teleop", "headerId": "teleopPoints"},
            {"title": "Really Long Table Header Name In Order to Cause Overflow", "headerId": "longTableHeader"},
            {"title": "Comments", "headerId": "comments"}
        ],
        "rows": [
            {
                "teamNumber": 283,
                "alliance": "blue",
                "matchNumber": 1,
                "totalPoints": 36,
                "autoPoints": 10,
                "baselineAuto": true,
                "teleopPoints": 26,
                "longTableHeader": "Hello",
                "comments": ""
            },
            {
                "teamNumber": 283,
                "alliance": "red",
                "matchNumber": 15,
                "totalPoints": 16,
                "autoPoints": 10,
                "baselineAuto": true,
                "teleopPoints": 6,
                "longTableHeader": "Hello",
                "comments": ""
            },
            {
                "teamNumber": 283,
                "alliance": "blue",
                "matchNumber": 33,
                "totalPoints": 66,
                "autoPoints": 20,
                "baselineAuto": true,
                "teleopPoints": 46,
                "longTableHeader": "Hello",
                "comments": ""
            },
            {
                "teamNumber": 254,
                "alliance": "red",
                "matchNumber": 1,
                "totalPoints": 136,
                "autoPoints": 24,
                "baselineAuto": true,
                "teleopPoints": 112,
                "longTableHeader": "Hello",
                "comments": ""
            }
        ]
    };
    /*
    return axios.get(`${BACKEND_API_URL}/scoutingData`);
     */
}

function getScoutingDataForTeam(teamNumber) {
    return axios.get(`${BACKEND_API_URL}/scoutingData/teams/${teamNumber}`);
}

