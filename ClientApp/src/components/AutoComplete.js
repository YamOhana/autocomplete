import React, { useEffect, useState, useRef } from "react";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { Box } from "@mui/system";
const URL = "http://localhost:5000/api/Employee";

const AutoComplete = () => {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null);

    useEffect(() => {
        const employee = [];
        const promises = new Array(10).fill().map(() => fetch(`${URL}`));
        Promise.all(promises).then(employeeArr => {
            return employeeArr.map((value, index) =>
                value.json().then((worker) => {
                    let current = worker[index];
                    let obj = {
                        Name: current.Name,
                        WorkTitle: current.WorkTitle,
                        ImageUrl: current.ImageUrl
                    };
                    employee.push(obj);
                })
            );
        });
        setOptions(employee);
    }, []);


    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
            setDisplay(false);
        }
    };

    const shouldBeBold = (boldingText, targetText) => {
        if (!targetText) {
            return "";
        }
        const indexOfText = targetText.toLowerCase().indexOf(boldingText.toLowerCase());
        if (indexOfText === -1) {
            return targetText;
        }
        const endIndexOfText = indexOfText + boldingText.length;
        return (
            <>
                {`${targetText.slice(0, indexOfText)}`}
                <b>{targetText.slice(indexOfText, endIndexOfText)}</b>
                {targetText.slice(endIndexOfText)}
            </>
        );
    };

    return (
        <div ref={wrapperRef} className="flex-container flex-column pos-rel">
            <TextField variant="outlined" onBlur={() => setDisplay(false)} onClick={() => setDisplay(!display)} placeholder="Type to search"
                value={search} onChange={event => {
                    setDisplay(true)
                    setSearch(event.target.value)
                }}
                sx={{ marginTop: 10, marginLeft: '50%', backgroundColor: "white"}}/>
            {display && (
                <div className="autoContainer">
                    {options
                        .filter((worker) => worker.Name.toLowerCase().indexOf(search.toLowerCase()) > -1 || worker.WorkTitle.toLowerCase().indexOf(search.toLowerCase()) > -1)
                        .map((value, i) => {
                            return (
                                <Box sx={{ maxWidth: 200, maxHeight: 100, marginLeft: '50%' }}>
                                    <Card key={i} tabIndex="0" onClick={() => setDisplay(false)}>
                                        <CardContent>
                                            <Avatar src={value.ImageUrl} />
                                            <Typography sx={{ fontSize: 14 }} variant="h5" component="div" >
                                                <Box>{shouldBeBold(search, value.Name)}</Box>
                                            </Typography>
                                            <Typography sx={{ fontSize: 12 }} color="text.secondary">
                                                <Box>{shouldBeBold(search, value.WorkTitle)}</Box>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Box>
                            );
                        })}
                </div>
            )}
        </div>
    )
};


export default AutoComplete;