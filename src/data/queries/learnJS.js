import { GraphQLObjectType, GraphQLString } from 'graphql/type';

import * as config from '../../config';

const CourseInfoType = new GraphQLObjectType({
  name: 'CourseInfo',
  fields: {
    title: { type: GraphQLString },
    teacher: { type: GraphQLString },
    teacherAvatar: { type: GraphQLString },
    startTime: { type: GraphQLString },
    endTime: { type: GraphQLString }
  }
});

export const courseInfo = {
  type: CourseInfoType,
  resolve() {
    return config.courseInfo;
  }
};
