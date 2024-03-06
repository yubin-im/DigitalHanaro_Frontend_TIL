import { ReactNode } from 'react';

export default function PhotosLayout({
  children,
  viewer,
}: {
  children: ReactNode;
  viewer: ReactNode;
}) {
  return (
    <>
      {viewer}
      {children}
    </>
  );
}
