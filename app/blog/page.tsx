import styles from "../page.module.css";
import { Heading, Stack, Text } from "@chakra-ui/react";
import { MotionBox } from "../_components/motion";
import { useTranslations } from "next-intl";
import { blogPosts } from "@/content/blog/posts";
import { PostCard } from "@/components/blog/post-card";

export default function Blog() {
  const t = useTranslations("blog");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <article className={styles.intro}>
          <MotionBox
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Heading size="2xl" className={styles.title} mb={4}>
              {t("title")}
            </Heading>
            <Text mb={4}>{t("description")}</Text>
          </MotionBox>
        </article>
        <section aria-labelledby="blog-posts-heading">
          <Heading id="blog-posts-heading" size="lg" mb={6}>
            {t("sectionHeading")}
          </Heading>
          <Stack >
            {blogPosts.map((post, index) => (
              <PostCard
                key={post.slug}
                post={post}
                featuredLabel={index === 0 ? t("featuredLabel") : undefined}
                readingTimeLabel={t("readingTime", {
                  minutes: post.readingTimeMinutes,
                })}
                commentsTitle={t("commentsPlannedTitle")}
                commentsBody={t("commentsPlannedBody")}
                showCommentsNotice={!post.commentsEnabled}
              />
            ))}
          </Stack>
        </section>
      </main>
    </div>
  );
}
