import { Grid, Typography, Button } from '@mui/material';

interface CallToActionProps {
    ctaText: React.ReactNode;
    buttonText: string;
    buttonAction: () => void;
    backgroundColor?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ ctaText, buttonText, buttonAction , backgroundColor}) => (
    <Grid container alignItems="center" justifyContent="center" style={{ padding: '32px', backgroundColor: backgroundColor ?? 'transparent' }}>
        <Grid item xs={12} sm={8}>
            <Typography variant="h4" gutterBottom>
                {ctaText}
            </Typography>
            <Button variant="contained" size="large" onClick={buttonAction}>
                {buttonText}
            </Button>
        </Grid>
    </Grid>
);

export default CallToAction;
