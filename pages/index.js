import Head from 'next/head'
import moment from 'moment'
import { useEffect, useState } from 'react';

const Home = () =>{ 
  useEffect(() => {
    setInterval(()=>{
      let currentDate = moment()
      updateCurrentDate(currentDate)
    },1000)
  },[])
  let startDate = moment("25032020","DDMMYYYY");
  let endDate = new Date(2020,3,15);
  let startDateMoment = moment(startDate)
  let endDateMoment = moment(endDate)
  
  let [ currentDate, updateCurrentDate ] = useState(moment());
  let remainingDay = endDateMoment.diff(currentDate, 'days');
  let remainingSeconds = endDateMoment.diff(currentDate, 'seconds');
  let days = Math.floor(remainingSeconds/86400)
  let hours = Math.floor((remainingSeconds/86400 - days) * 24)
  let mins = Math.floor(((remainingSeconds/86400 - days) * 24 - hours) * 60)
  let secs = Math.round((((remainingSeconds/86400 - days) * 24 - hours) * 60 - mins) * 60)
  return (
    <div className="container">
      <Head>
        <title>COVID-19 INDIA LOCKDOWN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 style={{ textAlign: 'center', marginBottom: '2px' }}>COVID-19 INDIA LOCKDOWN</h1>
        <p>A fight against coronavirus</p>
        <div className='timeBreakOut'>
          <h3 style={{marginRight: '30px'}}>{moment(startDate).format('DD MMM YYYY')}</h3>
          <h3>{moment(endDate).format('DD MMM YYYY')}</h3>
        </div>
        <div style={{ display: 'flex'}}>
          <div className={'daysRemaining'}>
            <h2 className='time' >{days}</h2>
            <h4 style={{ marginTop: 0}}>DAY{remainingDay>1?'S':''}</h4>
          </div>
          <div className={'daysRemaining'}>
            <h2 className='time'>{hours}</h2>
            <h4 style={{ marginTop: 0}}>HOUR{hours>1?'S':''}</h4>
          </div>
          <div className={'daysRemaining'}>
            <h2 className='time'>{mins}</h2>
            <h4 style={{ marginTop: 0}}>MIN</h4>
          </div>
          <div className={'daysRemaining'}>
            <h2 className='time'>{secs}</h2>
            <h4 style={{ marginTop: 0}}>SEC</h4>
          </div>
        </div>
          <h4>Date/Time : {moment(currentDate).format('DD MMM YYYY / hh:mm:ss a')}</h4>
        <div>
          <a href="https://www.mohfw.gov.in/" target="_blank" rel="government of India" style={{ color: 'red'}}>
            Click here for Important Information
          </a>
        </div>
      </main>

      <footer>
        <div><b>Disclamer: A non goverment site</b></div>
        <a
          href="https://github.com/ashwaniarya"
          target="_blank"
          rel="noopener noreferrer"
        >
          Build for info by&nbsp;<b>Ashwani Arya</b>
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .timeBreakOut{
          display: flex;
          justify-content: flex-end;
        }
        .daysRemaining {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-left: 20px;
          margin-right: 20px;
        }
        .time {
          margin: 0px;
          font-size: 120px;
        }
        @media ( max-width: 720px ) {
          .time {
            margin: 0px;
            font-size: 80px;
          }
        }
        @media ( max-width: 512px ) {
          .time {
            margin: 0px;
            font-size: 60px;
          }
        }
        @media ( max-width: 430px ) {
          .time {
            margin: 0px;
            font-size: 35px;
          }
        }
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
export default Home
