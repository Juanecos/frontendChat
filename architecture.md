src/
│
├── app/                          ← Arranque de la aplicación
│   ├── App.tsx
│   ├── router.tsx                ← React Router, rutas públicas y protegidas
│   └── providers.tsx             ← QueryClient, SocketProvider, ThemeProvider
│
├── features/                     ← Módulos de dominio (espeja NestJS)
│   │
│   ├── auth/
│   │   ├── components/           ← LoginForm, RegisterForm
│   │   ├── hooks/                ← useLogin, useRegister, useLogout
│   │   ├── services/             ← auth.service.ts (llamadas REST)
│   │   ├── store/                ← authStore.ts (Zustand)
│   │   └── types/                ← User, LoginPayload, etc.
│   │
│   ├── chat/
│   │   ├── components/           ← ChatWindow, MessageBubble, TypingIndicator
│   │   ├── hooks/                ← useMessages, useSocket, useTyping
│   │   ├── services/             ← chat.service.ts (REST) + chat.socket.ts (WS)
│   │   ├── store/                ← chatStore.ts (Zustand)
│   │   └── types/                ← Message, Conversation, etc.
│   │
│   ├── feed/
│   │   ├── components/           ← PostCard, PostComposer, InfiniteScroll
│   │   ├── hooks/                ← useFeed, useLike, useComment
│   │   ├── services/             ← feed.service.ts
│   │   └── types/                ← Post, Comment, Reaction
│   │
│   ├── notifications/
│   │   ├── hooks/                ← useNotifications (WS + REST)
│   │   ├── services/             ← notifications.socket.ts
│   │   └── store/                ← notificationsStore.ts
│   │
│   └── profile/
│       ├── components/           ← ProfileCard, EditProfileForm, AvatarUpload
│       ├── hooks/                ← useProfile, useUpdateProfile
│       └── services/             ← profile.service.ts
│
├── pages/                        ← Solo composición, sin lógica
│   ├── LoginPage.tsx
│   ├── FeedPage.tsx
│   ├── ChatPage.tsx
│   └── ProfilePage.tsx
│
├── shared/                       ← Todo lo que cruza features
│   ├── components/               ← Button, Input, Modal, Avatar (UI primitivos)
│   ├── hooks/                    ← useDebounce, usePagination, useMediaQuery
│   ├── lib/
│   │   ├── axios.ts              ← Instancia base con interceptors (auth header)
│   │   ├── socket.ts             ← Instancia base de socket.io-client
│   │   └── queryClient.ts        ← Configuración de TanStack Query
│   ├── utils/                    ← formatDate, truncateText, etc.
│   └── types/                    ← ApiResponse<T>, PaginatedResponse<T>
│
└── assets/