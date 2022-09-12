import { JComment } from '@raulsanz/interface/comment';

describe('JComment', () => {
  let testClass: any;

  beforeEach(() => {
    testClass = new JComment(
      '',
      {
        id: '',
        name: '',
        email: '',
        avatarUrl: '',
        createdAt: '',
        updatedAt: '',
        issueIds: ['']
      }
    );
  });

  it('Should have interfaces ', () => {
    expect(Object.keys(testClass).length).toEqual(5);
    expect(Object.keys(testClass.user).length).toEqual(7);
  });
});
