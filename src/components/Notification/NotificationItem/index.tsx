import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Avatar from '@/components/Common/Avatar';
import { MESSAGE } from '@/constants/notification';
import { userAtom } from '@/recoil/user';
import { PATH } from '@/routes/path';
import { Notification } from '@/types/response';
import { getElapsedTime } from '@/utils/getElapsedTime';

import {
  AuthorWrapper,
  ContentWrapper,
  MessageContainer,
  MessageWrapper,
  NotificationItemContainer,
  TimeWrapper,
  UserWrapper,
} from './style';

interface NotificationItemProps {
  notification: Notification;
}

export default function NotificationItem({
  notification,
}: NotificationItemProps) {
  const navigate = useNavigate();

  const user = useRecoilValue(userAtom);
  const { author, createdAt, post } = notification;
  const notificationKeys = ['message', 'follow', 'like', 'comment'] as const;
  const key = notificationKeys.find(
    (notificationKey) => notificationKey in notification,
  )!;

  const handleClick = () => {
    if (post) {
      navigate(`${PATH.REVIEWDETAIL}/${post}`);

      return;
    }
  };
  return (
    <NotificationItemContainer onClick={handleClick}>
      <Avatar imageUrl={author.image} size={'small'} />
      <MessageContainer>
        <UserWrapper>{user?.fullName}</UserWrapper>
        <MessageWrapper>
          <AuthorWrapper>{author.fullName}</AuthorWrapper>
          <ContentWrapper>{MESSAGE[key].text}</ContentWrapper>
        </MessageWrapper>
      </MessageContainer>
      <TimeWrapper>{getElapsedTime(createdAt)}</TimeWrapper>
    </NotificationItemContainer>
  );
}
