export {};

it('renders without crashing', () => {
  const querySelectorSpy = jest
    .spyOn(document, 'querySelector')
    .mockReturnValueOnce(document.createElement('div'))
    .mockReturnValueOnce(document.createElement('button'));

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('./main');

  expect(querySelectorSpy).toBeCalledTimes(2);
  expect(querySelectorSpy).toBeCalledWith('#app');
  expect(querySelectorSpy).toBeCalledWith('#counter');

  querySelectorSpy.mockRestore();
});
