CREATE TABLE `deals` (
    `gift_id` int NOT NULL AUTO_INCREMENT,
    `seller_id` int NOT NULL,
    `buyer_id` int NOT NULL,
    `price` decimal(10, 2) NOT NULL,
    `date` datetime DEFAULT NULL,
    PRIMARY KEY (`gift_id`),
    KEY `seller_id` (`seller_id`),
    KEY `buyer_id` (`buyer_id`),
    CONSTRAINT `deals_ibfk_1` FOREIGN KEY (`gift_id`) REFERENCES `gifts` (`id`),
    CONSTRAINT `deals_ibfk_2` FOREIGN KEY (`seller_id`) REFERENCES `users` (`user_id`),
    CONSTRAINT `deals_ibfk_3` FOREIGN KEY (`buyer_id`) REFERENCES `users` (`user_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci


CREATE TABLE `gifts` (
    `id` int NOT NULL AUTO_INCREMENT,
    `gift_number` int NOT NULL,
    `model` varchar(255) NOT NULL,
    `symbol` varchar(100) NOT NULL,
    `backdrop` varchar(100) NOT NULL,
    `owner_id` int NOT NULL,
    `price` decimal(10, 2) NOT NULL,
    PRIMARY KEY (`id`),
    KEY `owner_id` (`owner_id`),
    CONSTRAINT `gifts_ibfk_1` FOREIGN KEY (`owner_id`) REFERENCES `users` (`user_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci


CREATE TABLE `users` (
    `user_id` int NOT NULL,
    `username` varchar(255) DEFAULT NULL,
    `balance` decimal(10, 2) DEFAULT NULL,
    `created_at` datetime DEFAULT NULL,
    PRIMARY KEY (`user_id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci