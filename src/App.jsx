import React, { useState, useEffect } from 'react';
import { SectionTime, ButtonTime, TabelTime, OtherButton, Container } from './styles';

const Cronometro = () => {
  // UseState of the Seconds
  const [second, setSecond] = useState(0);
  // UseState of the Minutes
  const [minute, setMinute] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setSecond(prevSecond => {
          if (prevSecond + 1 === 60) {
            setMinute(prevMinute => prevMinute + 1);
            return 0;
          } else {
            return prevSecond + 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  function startTime() {
    setIsRunning(true);
  }

  function pauseTime() {
    setIsRunning(false);
  }

  function restartTime() {
    setSecond(0);
    setMinute(0);
    setIsRunning(false);
  }

  function oneMore() {
    setMinute(prevMinute => prevMinute + 1);
  }

  function fiveMore() {
    setMinute(prevMinute => prevMinute + 5);
  }

  function tenMore() {
    setMinute(prevMinute => prevMinute + 10);
  }

  function fifteenMore() {
    setMinute(prevMinute => prevMinute + 15);
  }

  function thirtyMore() {
    setMinute(prevMinute => prevMinute + 30);
  }

  function fortyMore() {
    setMinute(prevMinute => prevMinute + 40);
  }

  function fiftyMore() {
    setMinute(prevMinute => prevMinute + 50);
  }

  function sixtyMore() {
    setMinute(prevMinute => prevMinute + 60);
  }

  return (
    <>
      <Container>
        <TabelTime>
          <div>
            <OtherButton onClick={oneMore}>+ 1:00</OtherButton>
            <OtherButton onClick={fiveMore}>+ 5:00</OtherButton>
            <OtherButton onClick={tenMore}>+ 10:00</OtherButton>
            <OtherButton onClick={fifteenMore}>+ 15:00</OtherButton>
            <OtherButton onClick={thirtyMore}>+ 30:00</OtherButton>
            <OtherButton onClick={fortyMore}>+ 40:00</OtherButton>
            <OtherButton onClick={fiftyMore}>+ 50:00</OtherButton>
            <OtherButton onClick={sixtyMore}>+ 60:00</OtherButton>
          </div>
        </TabelTime>
        <SectionTime>
          <h1>{minute}:{second < 10 ? `0${second}` : second}</h1>
          <div>
            <ButtonTime onClick={startTime}>Start</ButtonTime>
            <ButtonTime onClick={pauseTime}>Pause</ButtonTime>
            <ButtonTime onClick={restartTime}>Restart</ButtonTime>
          </div>
        </SectionTime>
      </Container>
    </>
  );
};

export default Cronometro