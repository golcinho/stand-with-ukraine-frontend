import { Stepper } from '@bigcommerce/big-design';
import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { hideFooter, showFooter } from '../../state/mainSlice';
import { getConfiguration } from '../../state/mainSlice/asyncActions';
import { Steps } from '../../state/mainSlice/common';
import { selectCurrentStep } from '../../state/mainSlice/selectors';

import Charity from './Steps/Charity';
import Color from './Steps/Color';
import Modal from './Steps/Modal';
import Placement from './Steps/Placement';

function StepContent({ currentStep }: { currentStep: number }) {
  switch (currentStep) {
    case 0:
      return <Color />;

    case 1:
      return <Placement />;

    case 2:
      return <Charity />;

    case 3:
      return <Modal />;

    default:
      return null;
  }
}

export default function Setup() {
  const currentStep = useAppSelector(selectCurrentStep);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // on mount show footer
    dispatch(showFooter());
    dispatch(getConfiguration());

    // on dismount hide it
    return () => {
      dispatch(hideFooter());
    };
  }, [dispatch]);

  return (
    <>
      <Stepper currentStep={currentStep} steps={Steps} />
      <StepContent currentStep={currentStep} />
    </>
  );
}
