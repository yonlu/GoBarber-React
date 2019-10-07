import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { signOut } from '~/store/modules/auth/actions';
import { updateProfileRequest } from '~/store/modules/user/actions';

import AvatarInput from './AvatarInput';

import { Container, FormContainer } from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <FormContainer>
        <Form initialData={profile} onSubmit={handleSubmit}>
          <AvatarInput name="avatar_id" />

          <Input name="name" placeholder="Full name" />
          <Input name="email" type="email" placeholder="Your email" />

          <hr />

          <Input
            name="oldPassword"
            type="password"
            placeholder="Current password"
          />
          <Input name="password" type="password" placeholder="New password" />
          <Input
            name="confirmPassword"
            type="password"
            placeholder="Confirm new password"
          />

          <button type="submit">Update Profile</button>
        </Form>

        <button type="button" onClick={handleSignOut}>
          Log out
        </button>
      </FormContainer>
    </Container>
  );
}
