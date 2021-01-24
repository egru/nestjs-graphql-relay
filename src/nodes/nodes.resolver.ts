import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { fromGlobalId } from 'graphql-relay';
import { Node } from './nodes.interface';
import { NodesService } from './nodes.service';

@Resolver(() => Node)
export class NodesResolver {
  constructor(private readonly nodeService: NodesService) {}

  @Query(() => Node, { nullable: true })
  node(
    @Args({ name: 'id', type: () => ID }) id: string,
  ): Promise<Node | undefined | null> {
    const globalId = fromGlobalId(id);
    switch (globalId.type) {
      case 'User':
        return this.nodeService.findUser(globalId.id);
      default:
        break;
    }
    return null;
  }
}
