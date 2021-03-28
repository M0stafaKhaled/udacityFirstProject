import 'babel-polyfill';

import  handleSubmit  from '../js/formHandler';

test("send url to back-end", () => {
      expect(handleSubmit("test")).toEqual(undefined);
    });