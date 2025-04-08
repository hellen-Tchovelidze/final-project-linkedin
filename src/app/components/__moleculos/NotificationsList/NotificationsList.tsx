
'use client';

import { useEffect, useState } from 'react';
import { getUserNotifications, type UserNotification } from '../../../Hooks/lib/getNotifications';
import NotificationItem from '../NotificationItem/NotificationItem';

type Props = {
    currentUserId: string;
};

const NotificationsList = ({ currentUserId }: Props) => {
    const [notifications, setNotifications] = useState<UserNotification[]>([]);


    useEffect(() => {
        if (currentUserId) {
            const fetchNotifications = async () => {
                const res = await getUserNotifications(currentUserId);
                setNotifications(res);
            };

            fetchNotifications();
        }
    }, [currentUserId]); 

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">notifications</h2>
            {notifications.length === 0 && <p>no notifications</p>}
            {notifications.map((n) => (
                <NotificationItem key={n.id} notification={n} currentUserId={currentUserId} />
            ))}
        </div>
    );
};

export default NotificationsList;
