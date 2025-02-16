import { Router, Request, Response, RequestHandler } from 'express';
import { AnyType } from 'sn-types-general';

type ParamDict = Record<string, AnyType>;
type Locals = Record<string, AnyType>;

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CustomRequest<
    TBody = AnyType,
    TParams extends ParamDict = ParamDict,
    TQuery = AnyType,
    TLocals extends Locals = Locals,
> extends Request<TParams, AnyType, TBody, TQuery, TLocals> {}

export type Handler<
    TBody = AnyType,
    TParams extends ParamDict = ParamDict, // Add this constraint here
    TQuery = AnyType,
    TLocals extends Locals = Locals,
> = (req: CustomRequest<TBody, TParams, TQuery, TLocals>, res: Response) => AnyType;

export type Middleware<
    TBody = AnyType,
    TParams extends ParamDict = ParamDict,
    TQuery = AnyType,
> = RequestHandler<TParams, unknown, TBody, TQuery>;

export type Method =
    | 'get'
    | 'head'
    | 'post'
    | 'put'
    | 'delete'
    | 'connect'
    | 'options'
    | 'trace'
    | 'patch'
    | 'use';

export type Route = {
    method: Method;
    path: string;
    middleware?: Middleware[];
    handler: Handler | Router;
};
