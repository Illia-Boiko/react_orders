import React from 'react';
import { UserType } from '../types/prop.tipes';

export function User({ user }) {
  return (
    <>
      {`(${user.name})`}
    </>
  );
}

User.propTypes = {
  user: UserType.isRequired,
};
