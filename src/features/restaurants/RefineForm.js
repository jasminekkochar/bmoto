import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'


import {refineTermsChanged} from './restaurantsSlice'

export const RefineForm = () => {
	const [refine, setRefine] = useState('')

	const onRefineChanged = e => setRefine(e.target.value)
  
  const dispatch = useDispatch() 
  const onRefineClicked = () => {
    if (refine){
      dispatch(refineTermsChanged(refine))
    }
  }

  const onRefineClear = () => {
    dispatch(refineTermsChanged(''))
    setRefine('')
  }

	return (
		<section className="refine">
      	<h2>Refine Your Search</h2>
      	<form className="search">
        	<label htmlFor="refineInput">What are you looking for?</label>
        	<input
          		type="text"
          		id="refineInput"
          		name="refineInput"
              placeholder="Try 'pizza' or 'Italian'"
          		value={refine}
          		onChange={onRefineChanged}
        	/>
        	<button type="button" onClick={onRefineClicked} disabled={(!refine)}>Find!</button>
          <button type="button" onClick={onRefineClear} disabled={(!refine)}>Clear</button>
      </form>
    </section>
	)
}
