import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';
import { FC } from 'react';

const GET_COURSES = gql`
  query GetCourses {
    courses {
      id
      title
    }
  }
`;

interface Course {
  id: string;
  title: string;
}

interface CoursesData {
  courses: Course[];
}

const CourseList: FC = () => {
  const { loading, error, data } = useQuery<CoursesData>(GET_COURSES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { courses } = data!;

  return (
    <div>
      {courses.map((course) => (
        <Link key={course.id} href={`/course/${course.id}`}>
          {course.title}
        </Link>
      ))}
    </div>
  );
};

export default CourseList;
