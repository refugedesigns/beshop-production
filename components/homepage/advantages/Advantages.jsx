import React from "react";
import { Container, Grid } from "@mui/material";
import BenefitCard from "@/components/ui/benefits/BenefitCard";

const Advantages = () => {
  return (
    <Grid container className="mt-20 lg:mt-40 mx-auto" maxWidth="lg">
      <Grid item xs={12} sm={4}>
        <BenefitCard
          cardImage="/assets/img/icons/natural.svg"
          heading="Natural"
          except="Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do."
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <BenefitCard
          cardImage="/assets/img/icons/quality.svg"
          heading="Quality"
          except="Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do."
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <BenefitCard
          cardImage="/assets/img/icons/organic.svg"
          heading="Organic"
          except="Non aliqua reprehenderit reprehenderit culpa laboris nulla minim anim velit adipisicing ea aliqua alluptate sit do do."
        />
      </Grid>
    </Grid>
  );
};

export default Advantages;
