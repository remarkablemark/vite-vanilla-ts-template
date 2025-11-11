export {};

it('renders without crashing', () => {
  const querySelectorSpy = jest
    .spyOn(document, 'querySelector')
    .mockReturnValueOnce(document.createElement('div'))
    .mockReturnValueOnce(document.createElement('button'));

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('./main');

  expect(querySelectorSpy).toHaveBeenCalledTimes(2);
  expect(querySelectorSpy).toHaveBeenCalledWith('#app');
  expect(querySelectorSpy).toHaveBeenCalledWith('#counter');

  querySelectorSpy.mockRestore();
});
