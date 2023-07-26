import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store';


const Tab = () => {
  const snap = useSnapshot(state);
  return (
    <div>Tab</div>
  )
}

export default Tab