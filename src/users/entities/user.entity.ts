import {
  Field,
  FieldMiddleware,
  ID,
  MiddlewareContext,
  NextFn,
  ObjectType,
} from '@nestjs/graphql';
import { toGlobalId } from 'graphql-relay';
import { Node } from 'src/nodes/nodes.interface';

const resolveId: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  const value = await next();
  return toGlobalId('User', value);
};

@ObjectType({ implements: Node })
export class User implements Node {
  @Field(() => ID, { middleware: [resolveId] })
  id: string;

  @Field(() => String)
  name: string;
}
