import React from 'react';
import { render } from 'react-dom';
//may want react-router stuff here instead of in site?

// components
import Site from './site';


render(
  (
    <Site
      />
  ),
  document.getElementById('container')

)
