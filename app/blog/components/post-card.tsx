"use client";

import type { BlogPost } from "@/content/blog/posts";
import {
  Badge,
  Box,
  Heading,
  HStack,
  Separator,
  Stack,
  Text,
} from "@chakra-ui/react";

type PostCardProps = {
  post: BlogPost;
  readingTimeLabel: string;
  featuredLabel?: string;
  commentsTitle: string;
  commentsBody: string;
  showCommentsNotice?: boolean;
};

export function PostCard({
  post,
  readingTimeLabel,
  featuredLabel,
  commentsTitle,
  commentsBody,
  showCommentsNotice = false,
}: PostCardProps) {
  return (
    <Box
      as="article"
      borderWidth="1px"
      borderRadius="2xl"
      padding={{ base: 6, md: 8 }}
      bg="var(--gray-alpha-100)"
    >
      <Stack gap="5">
        {featuredLabel ? (
          <Text
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="widest"
            color="gray.500"
          >
            {featuredLabel}
          </Text>
        ) : null}
        <Stack gap="3">
          <HStack justifyContent="space-between">
            <Heading size="lg">{post.title}</Heading>
            <Text color="gray.500">
              {post.publishedDisplay} · {readingTimeLabel}
            </Text>
          </HStack>

          <Text fontStyle="italic">{post.summary}</Text>
          <HStack flexWrap="wrap" data-testid="post-tags">
            {post.tags.map((tag) => (
              <Badge key={tag} colorScheme="gray" variant="subtle">
                {tag}
              </Badge>
            ))}
          </HStack>
        </Stack>
        <Separator />
        <Stack gap="3">
          {post.content.map((paragraph, index) => (
            <Text lineHeight="tall" key={`${post.slug}-paragraph-${index}`}>
              {paragraph}
            </Text>
          ))}

          <Text fontWeight="bold" textStyle="lg" alignSelf="flex-end">
            JC.
          </Text>
        </Stack>
        {showCommentsNotice ? (
          <Box
            borderRadius="xl"
            borderWidth="1px"
            padding={4}
            bg="var(--gray-alpha-100)"
            data-testid="comments-placeholder"
          >
            <Text fontWeight="semibold" mb={1}>
              {commentsTitle}
            </Text>
            <Text color="gray.600">{commentsBody}</Text>
          </Box>
        ) : null}
      </Stack>
    </Box>
  );
}
