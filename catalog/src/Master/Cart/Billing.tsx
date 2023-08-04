import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
const Billing = (props: any) => {
  for (let i = 0; i < props.data.length; i++) {
    props.data[i].amount = '500';
  }
  interface TitleCount {
    title: string;
    count: number;
    amount: string;
  }

  const arr: { title: string; amount: string }[] = props.data;
  const titleCounts: { [title: string]: number } = {};
  for (const obj of arr) {
    const title = obj.title;
    if (!titleCounts[title]) {
      titleCounts[title] = 1;
    } else {
      titleCounts[title]++;
    }
  }
  const result: TitleCount[] = arr.map(obj => {
    const title = obj.title;
    const amount = obj.amount;
    return {
      title: title,
      amount: amount,
      count: titleCounts[title],
    };
  });
  let uniqueIds: any[] = [];
  const uniqueEmployees = result.filter((element: any) => {
    const isDuplicate = uniqueIds.includes(element.title);
    if (!isDuplicate) {
      uniqueIds.push(element.title);
      return true;
    }
    return false;
  });
  let totalAmount = 0;
  for (let i = 0; i < uniqueEmployees.length; i++) {
    let tot =
      Number(uniqueEmployees[i].count) * Number(uniqueEmployees[i].amount);
    totalAmount += tot;
  }
  return (
    <div style={{ width: '31.8%' }}>
      <Grid
        container
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        style={{ backgroundColor: '#eeeeee', marginLeft:"-3.2%" }}
      >
        <Grid item xs={6}>
          <h3>Name</h3>
        </Grid>
        <Grid item xs>
          <h3>Qty</h3>
        </Grid>
        <Grid item xs>
          <h3>Amount</h3>
        </Grid>
      </Grid>
      {uniqueEmployees.map((item: any, index: any) => (
        <Grid
          container
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ marginLeft: '-3%' }}
        >
          <Grid item xs={6}>
            <div style={{ display: 'flex' }}>
              {index + 1}
              &nbsp;
              <div>
                {item.title}
                <br />
                {item.amount}
              </div>
            </div>
          </Grid>
          <Grid item xs>
            &nbsp; &nbsp;
            {item.count}
          </Grid>
          <Grid item xs>
            &nbsp;
            {Number(item.count) * Number(item.amount)}
          </Grid>
        </Grid>
      ))}
      <h3>{totalAmount}</h3>
    </div>
  );
};

export default React.memo(Billing);
