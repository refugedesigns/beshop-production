import TrendingTabPanel from "../ui/tabs/CustomTabPannel";
import CustomTab from "../ui/tabs/CustomTab";


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TrendingTabs = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        TabIndicatorProps={{
          sx: {
            bgcolor: "transparent",
          },
        }}
        textColor="white"
        orientation={matches ? "horizontal" : "vertical"}
        className=""
      >
        <CustomTab label="My Info" {...a11yProps(0)} />
        <CustomTab Tab label="My Orders" className="mx-2" {...a11yProps(1)} />
        <CustomTab Tab label="Wishlist" {...a11yProps(2)} />
      </Tabs>
      <TrendingTabPanel value={value} index={0}>
        Item One
      </TrendingTabPanel>
      <TrendingTabPanel className="mt-10" value={value} index={1}>
        Item Two
      </TrendingTabPanel>
      <TrendingTabPanel value={value} index={2}>
        Item three
      </TrendingTabPanel>
    </Box>
  );
};

export default TrendingTabs;
