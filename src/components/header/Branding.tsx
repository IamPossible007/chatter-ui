import { Typography } from "@mui/material";
import TryIcon from '@mui/icons-material/Try';
import router from "../Routes";
const Branding = () => {
    return(
    <>
        <TryIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={() => router.navigate('/')}
            sx={{
              mr: 2,
              cursor: 'pointer',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CHATTER
          </Typography>
    </>
    )
};
export default Branding;