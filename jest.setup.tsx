import '@testing-library/jest-dom';
import 'isomorphic-fetch';
import 'jest-styled-components';


import { TextEncoder, TextDecoder } from 'util';

Object.assign(global, { TextDecoder, TextEncoder });

jest.mock('next/router', () => ({ router: jest.fn() }));
