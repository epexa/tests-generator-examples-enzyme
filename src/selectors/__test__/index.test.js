import state from '../../state';
import {
  getUserById,
  getUserLoadingStatus,
  getUserName,
  getUserId,
  getUserGender,
  getUserBirthDate,
} from '../selectors';

describe('Application/Selectors/usersData', () => {
  it('get user loading status', () => {
    const received = getUserLoadingStatus('001')(state);
    const expected = false;

    expect(received).toEqual(expected);
  });

  it('get user by id', () => {
    const received = getUserById('001')(state);
    const expected = {
      loading: false,
      data: {
        id: '001',
        name: 'James Bond',
        gender: 'male',
        birthDate: '1905-04-01',
      },
    };

    expect(received).toEqual(expected);
  });

  it('get user name', () => {
    const received = getUserName('001')(state);
    const expected = 'James Bond';

    expect(received).toEqual(expected);
  });

  it('get user id', () => {
    const received = getUserId('001')(state);
    const expected = '001';

    expect(received).toEqual(expected);
  });

  it('get user gender', () => {
    const received = getUserGender('001')(state);
    const expected = 'male';

    expect(received).toEqual(expected);
  });

  it('get user birth date', () => {
    const received = getUserBirthDate('001')(state);
    const expected = '1905-04-01';

    expect(received).toEqual(expected);
  });
});
