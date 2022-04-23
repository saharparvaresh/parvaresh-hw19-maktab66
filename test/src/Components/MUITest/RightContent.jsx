import React from 'react';
import { Container, Typography } from '@mui/material';

export default function RightContent({ open, title, desc }) {
    return (
        <>
            {
                !open ? (
                    <Container sx={{ pt: 5 }}>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{ flexGrow: 1 }}
                            align="center"
                        >
                            {
                                title?.toUpperCase() || 'welcome'
                            }

                        </Typography>
                        <Typography component="p" align="center">
                            {
                                desc || "Please select an exercise from the list on the left side."
                            }
                        </Typography>
                    </Container>
                ) : (
                    <Container sx={{ pt: 5 }}>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{ flexGrow: 1 }}
                            align="center"
                        >
                            {
                                'welcome'
                            }

                        </Typography>
                        <Typography component="p" align="center">
                            {
                                "Please select an exercise from the list on the left side."
                            }
                        </Typography>
                    </Container>
                )
            }
        </>
    )
}

