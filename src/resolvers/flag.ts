import { Resolver, Query, Arg, Mutation } from "type-graphql";
import { Flag, NewFlagInput } from "../entities/flag";

@Resolver(Flag)
class FlagsResolver {
  @Query(() => [Flag])
  async flags() {
    return Flag.find({});
  }

  @Query(() => Flag)
  async getFlagByCode(@Arg("flagCode") code: string) {
    const flag = await Flag.findOne({
      where: { code },
    });
    if (!flag) throw new Error("not found");
    return flag;
  }

  @Mutation(() => Flag)
  async createFlag(@Arg("data") data: NewFlagInput) {
    const newFlag = new Flag();
    Object.assign(newFlag, data);
    const { id } = await newFlag.save();
    return Flag.findOne({
      where: { id },
    });
  }
}

export default FlagsResolver;
