/* tslint:disable */
import {GraphQLResolveInfo} from 'graphql';

export type Resolver<Result, Parent = any, Context = any, Args = any> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export type SubscriptionResolver<Result, Parent = any, Context = any, Args = any> = {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
};

/** The `Upload` scalar type represents a file upload promise that resolves an object containing `stream`, `filename`, `mimetype` and `encoding`. */
export type Upload = any;

export interface Query {
  events?: (Event | null)[] | null;
  event?: Event | null;
  user?: User | null;
}

export interface Event {
  id: number;
  name: string;
  description?: string | null;
  location?: string | null;
  start?: string | null;
  end?: string | null;
  author?: User | null;
}

export interface User {
  authToken: string;
  registrationToken: number;
  phoneNumber: string;
  firstName?: string | null;
  lastName?: string | null;
}

export interface Mutation {
  saveEvent?: Event | null;
  registerUser?: boolean | null;
  authenticateUser?: string | null;
}
export interface EventQueryArgs {
  id?: number | null;
}
export interface UserQueryArgs {
  authToken?: string | null;
}
export interface SaveEventMutationArgs {
  id?: number | null;
  name?: string | null;
  description?: string | null;
  location?: string | null;
  start?: string | null;
  end?: string | null;
}
export interface RegisterUserMutationArgs {
  phoneNumber: string;
}
export interface AuthenticateUserMutationArgs {
  phoneNumber: string;
  registrationToken: string;
}

export namespace QueryResolvers {
  export interface Resolvers<Context = any> {
    events?: EventsResolver<(Event | null)[] | null, any, Context>;
    event?: EventResolver<Event | null, any, Context>;
    user?: UserResolver<User | null, any, Context>;
  }

  export type EventsResolver<R = (Event | null)[] | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type EventResolver<R = Event | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context,
    EventArgs
  >;
  export interface EventArgs {
    id?: number | null;
  }

  export type UserResolver<R = User | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context,
    UserArgs
  >;
  export interface UserArgs {
    authToken?: string | null;
  }
}

export namespace EventResolvers {
  export interface Resolvers<Context = any> {
    id?: IdResolver<number, any, Context>;
    name?: NameResolver<string, any, Context>;
    description?: DescriptionResolver<string | null, any, Context>;
    location?: LocationResolver<string | null, any, Context>;
    start?: StartResolver<string | null, any, Context>;
    end?: EndResolver<string | null, any, Context>;
    author?: AuthorResolver<User | null, any, Context>;
  }

  export type IdResolver<R = number, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = any, Context = any> = Resolver<R, Parent, Context>;
  export type DescriptionResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LocationResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type StartResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type EndResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type AuthorResolver<R = User | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace UserResolvers {
  export interface Resolvers<Context = any> {
    authToken?: AuthTokenResolver<string, any, Context>;
    registrationToken?: RegistrationTokenResolver<number, any, Context>;
    phoneNumber?: PhoneNumberResolver<string, any, Context>;
    firstName?: FirstNameResolver<string | null, any, Context>;
    lastName?: LastNameResolver<string | null, any, Context>;
  }

  export type AuthTokenResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type RegistrationTokenResolver<R = number, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type PhoneNumberResolver<R = string, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type FirstNameResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
  export type LastNameResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context
  >;
}

export namespace MutationResolvers {
  export interface Resolvers<Context = any> {
    saveEvent?: SaveEventResolver<Event | null, any, Context>;
    registerUser?: RegisterUserResolver<boolean | null, any, Context>;
    authenticateUser?: AuthenticateUserResolver<string | null, any, Context>;
  }

  export type SaveEventResolver<R = Event | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context,
    SaveEventArgs
  >;
  export interface SaveEventArgs {
    id?: number | null;
    name?: string | null;
    description?: string | null;
    location?: string | null;
    start?: string | null;
    end?: string | null;
  }

  export type RegisterUserResolver<R = boolean | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context,
    RegisterUserArgs
  >;
  export interface RegisterUserArgs {
    phoneNumber: string;
  }

  export type AuthenticateUserResolver<R = string | null, Parent = any, Context = any> = Resolver<
    R,
    Parent,
    Context,
    AuthenticateUserArgs
  >;
  export interface AuthenticateUserArgs {
    phoneNumber: string;
    registrationToken: string;
  }
}
