import React from 'react'

function Sate() {
    function getDateAtNine(forceHour) {
        let now = new Date();
        const hour = forceHour == null ? now.getHours() : forceHour;
        if (hour < 9) {
          now = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
        }
        return new Intl.DateTimeFormat(undefined, {
          dateStyle: 'long'
        }).format(now);
      }
      
      console.log(getDateAtNine(8)); // shows what will print at 8 am on today's date
      console.log(getDateAtNine()); // shows what will print at the current hour on today's date

    return (
        <div>
            {getDateAtNine()}
        </div>
    )
}

export default Sate
